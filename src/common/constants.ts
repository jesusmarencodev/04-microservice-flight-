   
export enum RabbitMQ{
    PassengerQueue = 'passengers',
    FlightQueue = 'flight',
}


export enum PassengerMSG {
    CREATE = 'CREATE_PASSENGER',
    FIND_ALL = 'FIND_PASSENGERS',
    FIND_ONE = 'FIND_ONE_PASSENGER',
    UPDATE = 'UPDATE_PASSENGER',
    DELETE = 'DELETE_PASSENGER',
}

export enum FlightMSG {
    CREATE = 'CREATE_FLIGHT',
    FIND_ALL = 'FIND_FLIGHTS',
    FIND_ONE = 'FIND_ONE_FLIGHT',
    UPDATE = 'UPDATE_FLIGHT',
    DELETE = 'DELETE_FLIGHT',
    ADD_PASSENGER = 'ADD_PASSENGER',
}
