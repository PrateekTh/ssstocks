export default interface companySeries {
    "Meta Data": {
        [key: string]: string;
    }
    "Time Series (Daily)" : {
        [key: string]: {
            [key: string]: number
        };
    }
}