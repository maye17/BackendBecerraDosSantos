const messagesModel = require("../models/messages.model.js");


class MesaggeService {

    async AllMessage (){
        try {
            
            const dataMessage =  messagesModel

        } catch (error) {
            
        }
    }

    async addMesagge (mesaggeData){
        try {
            const message = await messagesModel.create(mesaggeData);
            return message;
      
        } catch (error) {
            throw error;
        }

}
}


module.exports = MesaggeService;
