class ApiResponse {
    constructor(stastusCode,data,message="Success"){
        this.stastusCode = stastusCode
        this.data = data
        this.message = message
        this.success = stastusCode <400
    }
}

export {ApiResponse}