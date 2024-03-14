import moment from "moment"

export const  formmatedDate =(formmatedDate: Date|string) => {
    return (moment(formmatedDate).format('DD-MM-YYYY'))
}