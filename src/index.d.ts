type beforeService = (req:any,resolve:any,reject:any)=>void
type error_reject = {
    status?:number,
    response:any
}
declare module 'localservicejs'{
    type _LocalService = {
        listener:(url:string,method:string,service:any,error_service:any,beforeService?:beforeService)=>void
    }
    const LocalService:_LocalService
    export default LocalService;
}