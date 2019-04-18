export interface CyOtherDataRecord {
    name: string;
    content: string;
}

export interface CyOtherData {
    tag: string;
    text: string;
    records: CyOtherDataRecord[];
    [key: string]: any;
}

export interface CyTempData {
    OtherData: CyOtherData[];
    TableData: [];
}
