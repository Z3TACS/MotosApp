
export interface BikeData{
    bike: Bike;
    company: Company;
    chassis: Chassis;
    dimensions: Dimensions;
    engine: Engine
}

export interface Bike{
    idBike: number;
    idCompany?: number;
    idEngine?:number;
    idDimension?:number;
    idChassis?:number;
    price?: number;
    announceYear?:string;
    description?:string;
    model:string;
    bikeUrlImage?: string;
    bikeUrlOficial?: string;
}

export interface Company{
    companyName:string;
    companyCountry:string;
    companyBornDate:string;
    companyUrlOfficial: string;
    companyUrlLogo: string;
}

export interface Chassis {
    bikeFrametype?: string
    bikeFrontSuspensionType?: string
    bikeRearSuspensionType?: string
    bikeFrontTravel?: string
    bikeRearTravel?: string
    bikeFrontBrake?: string
    bikeRearBrake?: string
    bikeFrontTyre?: string
    bikeRearTyre?: string
}

export interface Dimensions{
    bikeSeatheight?: string
    bikeOverallLength?: string
    bikeOverallWidth?: string
    bikeOverallHeight?: string
    bikeFuelCapacity?: string
    bikeOilCapacity?: string
    bikeWheelbase?: string
    bikeWetweight?: string
    bikeDryweight?: string
}

export interface Engine{
    bikeHp?: string 
    bikeHpA2?: string 
    bikeKw?: string 
    bikeKwA2?: string 
    bikeNm?: string 
    bikeNmRpm?: string 
    bikeHpRpm?: string 
    bikeHpA2Rpm?: string 
    bikeEngineType?: string 
    bikeCc?: string 
    bikeCompressionRatio?: string 
    bikeLubricationSystem?: string 
    bikeClutchType?: string 
    bikeIgnitionSystem?: string 
    bikeStarterSystem?: string 
    bikeTransmissionSystem?: string 
    bikeTransmissionSpeed?: string 
    bikeEngineCoEmission?: string 
    bikeFuelSystem?: string 
    bikeFuelConsumptionLiters?: string 
    bikeBatteryVoltage?: string 
    bikeBatteryCapacity?: string 
    bikeBatteryAutonomy?: string 

}

export const EngineDictionary = {
    bikeHp: "Potencia",
    bikeHpA2: "Potencia limitada",
    bikeNm: "Par máximo",
    bikeEngineType: "Tipo de motor",
    bikeCc: "Cilindrada",
    bikeCompressionRatio: "Compresión",
    bikeLubricationSystem: "Sistema de lubricación",
    bikeClutchType: "Tipo de embrague",
    bikeIgnitionSystem: "Sistema de ignición",
    bikeStarterSystem: "Sistema de encendido",
    bikeTransmissionSystem: "Tipo de transmisión",
    bikeTransmissionSpeed: "Velocidades",
    bikeEngineCoEmission: "Emisiones CO2",
    bikeFuelSystem: "Sistema de combustión",
    bikeFuelConsumptionLiters: "Consumo estimado",
    bikeBatteryVoltage: "Voltaje",
    bikeBatteryCapacity: "Capacidad",
    bikeBatteryAutonomy: "Autonomía máxima anunciada",
}

export const ChassisDictionary = {
    bikeFrametype : "Tipo de chasis",
    bikeFrontSuspensionType : "Suspensión delantera",
    bikeRearSuspensionType : "Suspesión trasera",
    bikeFrontTravel : "Recorrido de la suspensión delantera",
    bikeRearTravel : "Recorrido de la suspensión trasera",
    bikeFrontBrake : "Freno delantero",
    bikeRearBrake : "Freno trasero",
    bikeFrontTyre : "Neumático delantero",
    bikeRearTyre : "Neumático trasero",
}

export const DimensionsDictionary = {
    bikeSeatheight : "Altura del asiento",
    bikeOverallLength : "Longitud total",
    bikeOverallWidth : "Anchura total",
    bikeOverallHeight : "Altura total",
    bikeFuelCapacity : "Depósito gasolina",
    bikeOilCapacity : "Depósito aceite",
    bikeWheelbase : "Wheelbase",
    bikeWetweight : "Peso en mojado (gasolina, aceite y refrigerante)",
    bikeDryweight : "Peso en seco",
}

export const BikeDictionary = {
    announceYear : "Fecha de lanzamiento",
    description : "Descripción",
    model : "Modelo",
}

export const CompanyDictionary = {
    companyName : "Fabricante",
    companyCountry : "País del fabricante",
    companyBornDate : "Año de fundación",
}