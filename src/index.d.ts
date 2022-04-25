declare module 'localservicejs'{
    type _LocalService = {
        listener:(url:string,method:string,service:any,beforeService?:any)=>void
    }
    const LocalService:_LocalService
    export default LocalService;
}