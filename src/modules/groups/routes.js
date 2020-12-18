const hana = require('../../loaders/hana')
const request = require('./infrastructure/request')
const controller = require('./infrastructure')
const permissions = require("./permissions")
module.exports = (router) => {
    router.get('/groups',
        request.auth,
        (req, res, next) => request.check(permissions.list, req, res, next),
        request.paginate,
        controller.listController.invoke)

    router.post('/groups',
        request.auth,
        (req, res, next) => request.check(permissions.create, req, res, next),
        request.create,
        controller.createController.invoke)

    router.put('/groups/:idGroup',
        request.auth,
        (req, res, next) => request.check(permissions.update, req, res, next),
        request.pk,
        request.update,
        controller.updateController.invoke)

    router.delete('/groups/:idGroup',
        request.auth,
        (req, res, next) => request.check(permissions.delete, req, res, next),
        request.pk,
        controller.deleteController.invoke)

    router.get('/groups/:idGroup/permissions',
        request.auth,
        (req, res, next) => request.check(permissions.permissions, req, res, next),
        request.pk,
        controller.assignPerListController.invoke)

    router.post('/groups/:idGroup/permissions',
        request.auth,
        (req, res, next) => request.check(permissions.assign, req, res, next),
        request.pk,
        controller.assignPerCrearController.invoke)


    router.get('/hana',(req, res)=>{
        hana(`SELECT
            T0."ItemCode" as "Cod.Mx",
            T0."SWW" as "Cod.CUM",
            T0."CodeBars",
            T0."ItemName",
            T0."U_PHR_FormFarma",
            T0."U_PHR_ViaAdmon",
            T0."U_PHR_PrincActivo",
            T0."U_PHR_CantPrincAct",
            T0."U_PHR_UndMedida",
            (case T0."U_PHR_TpArt"
            when '01' then 'Medicamento'
            when '02' then 'Insumo' end) as "Tipo Articulo",
            case T0."frozenFor"
            when 'Y' then 'Inactivo'
            else 'Activo' end as "Estado",
            (case T0."U_PHR_TpReg"
            when '01' then 'Presentación'
            when '02' then 'Concentración'
            when '03' then 'Referencia' end) AS "Tipo de Regulación",
            (case T0."U_PHR_Pos"
            when '01' then 'POS'
            when '02' then 'NO POS' end) AS "POS/NoPOS",
            (case
            when (SELECT "QryGroup1" FROM OITM WHERE "ItemCode"=T0."ItemCode")='Y' then 'Si'
            else
            'No'
            end) as "MxControl",
            (case
            when (SELECT "ItmsGrpCod" FROM OITM WHERE "ItemCode"=T0."ItemCode")='102' then 'MED_EXCLUIDOS'
            when (SELECT "ItmsGrpCod" FROM OITM WHERE "ItemCode"=T0."ItemCode")='101' then 'MED_GRAVADOS'
            end) as "GrpArt",
            (case
            when (SELECT "QryGroup4" FROM OITM WHERE "ItemCode"=T0."ItemCode")='Y' then 'Comercial'
            when (SELECT "QryGroup5" FROM OITM WHERE "ItemCode"=T0."ItemCode")='Y' then 'Genérico'
            end) as "Tipo",
            (case
            when (SELECT "QryGroup7" FROM OITM WHERE "ItemCode"=T0."ItemCode")='Y' then 'Nivel I'
            when (SELECT "QryGroup8" FROM OITM WHERE "ItemCode"=T0."ItemCode")='Y' then 'Nivel II'
            when (SELECT "QryGroup9" FROM OITM WHERE "ItemCode"=T0."ItemCode")='Y' then 'Nivel III'
            when (SELECT "QryGroup10" FROM OITM WHERE "ItemCode"=T0."ItemCode")='Y' then 'Nivel IV'
            when (SELECT "QryGroup11" FROM OITM WHERE "ItemCode"=T0."ItemCode")='Y'then 'Nivel Alto Costo'
            end) as "Nivel",
            
            
            
            (case IFNULL(T0."U_PHR_Nivel",0)
            when '1' then 'Nivel I'
            when '2' then 'Nivel II'
            when '3' then 'Nivel III'
            when '4' then 'Nivel IV'
            when '5' then 'Nivel Alto Costo'
            else '' end )as "NuevoNivel",
            
            
            
            (case IFNULL(T0."U_PHR_ClaMx" ,0)
            when '01' then 'Medicamento'
            when '02' then 'Insumo'
            when '03' then 'Cosmetico'
            when '04' then 'Fitoterapeutico'
            when '05' then 'Homeopatico'
            when '06' then 'Naturista'
            when '07' then 'Preparacion Magistral'
            when '08' then 'Suplemento'
            when '09' then 'Vital No Disponible'
            end) as "ClasificaMx",
            
            (SELECT avg("AvgPrice") FROM OITW WHERE "ItemCode"=T0."ItemCode" and "AvgPrice">0) as "CostoProm",
            
            (SELECT max(DE."Price") FROM OPDN EN
            INNER JOIN PDN1 DE ON EN."DocEntry" = DE."DocEntry"
            WHERE EN."CANCELED"='N' and
            EN."DocDate"=(select max(E1."DocDate")
            FROM OPDN E1
            INNER JOIN PDN1 E2 ON E1."DocEntry" = E2."DocEntry"
            WHERE E2."ItemCode" =T0."ItemCode") and DE."ItemCode"=T0."ItemCode" ) AS "UltPreCompra",
            (SELECT max(EN."DocDate") FROM OPDN EN INNER JOIN PDN1 DE ON EN."DocEntry" = DE."DocEntry" WHERE EN."CANCELED"='N' and DE."ItemCode"=T0."ItemCode" ) AS "FechaComp",
            T0."U_PHR_Lab",
            T0."UserText",
            T0."U_PHR_Agrup",
            T0."U_PHR_GrTerap",
            T0."TaxCodeAP" as "Ind.Impto Compra",
            T0."TaxCodeAR" as "Ind.Impto Venta",
            T0."BuyUnitMsr",
            T0."SalUnitMsr",
            T0."InvntryUom",
            T0."PlaningSys",
            T0."PrcrmntMtd",
            T0."U_PHR_NumATC",
            T0."U_PHR_DescATC",
            T0."U_PHR_RegSanitario",
            T0."U_PHR_CodMipres" FROM OITM T0 WHERE T0."ItemCode" LIKE 'MD%'
            Order by T0."ItemCode"`).then(rows => {
          /*  for (const argumentsKey in rows) {
                rows[argumentsKey].CardName = rows[argumentsKey].CardName.toLowerCase()
            }*/
            res.json(rows)
        }).catch((e)=>{
            res.json(e)
        })

    })

}
