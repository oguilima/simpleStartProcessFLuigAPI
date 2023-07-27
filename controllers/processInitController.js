const soap = require("soap")

module.exports = class ProcessInitController {

    static async initProcess(req, res) {
        const url = 'http://10.10.0.70:8080/webdesk/ECMWorkflowEngineService?wsdl';

        soap.createClient(url, function (err, client) {
            if (err) {
                console.log("Erro ao criar cliente SOAP:", err);
                return;
            }

            const obj = {
                username: "adm",
                password: "MD5:e6dab562b3167b161ead0baee0a5cf7e",
                companyId: "2",
                processId: "pedido_compras",
                comments: "Iniciado via NodeJs",
                attachments: "",
                cardData: ""
            }

            client.simpleStartProcess(obj, function (err, result) {
                if (err) {
                    console.log("Erro ao iniciar o processo via SOAP:", err);
                    return;
                }
                
                res.status(201).json({numProcess: result.result.item[5].split("=")[1]});
            });
        });
    }
}