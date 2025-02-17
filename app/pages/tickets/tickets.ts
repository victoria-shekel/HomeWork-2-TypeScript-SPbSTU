import { getTicketById, postTicketData } from "@rest/tickets";
import '@myCss'; //main.scss
import '@assets/styles/tickets.scss'
import { initTicketElementTemplate } from "../../templates/ticketInfo";
import { IVipTicket, TicketType, ITicket } from "../../models/ticket/ticket";
import { initFooterTitle, initHeaderTitle } from "@services/general/general";
import { initTicketInfo, registerConfirmButton } from "@services/tickets/ticket";


let ticketInstance: TicketType ;

const clientType = "custom";



// init main  data
initApp();

registerConfirmButton();

function initApp(): void {
    const ticketData: Promise<IVipTicket[]> = getTicketById<IVipTicket>('someId');
    ticketData.then((data): void => {
        ticketInstance = data[0];
        const ticketName = typeof ticketInstance?.name === "string" ? ticketInstance?.name : '';
        initHeaderTitle(ticketName, 'h3');
        initFooterTitle('Туры по всему миру', 'h2');
        initTicketInfo(ticketInstance);
    });
}

/*  - перенести все методы ниже в раздел services (сюда импортировать и вызывать)
    - Указать в методах возвращающие типы, в теле функции также указать типы чтобы не было ошибок
*/




