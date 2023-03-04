// создать в разделе models интерфейс для класса и  применить реализацию к этому классу
export class Modal {
    //здесь должны быть поля и методы класса

    private readonly id: string
    public static modals: any[] = [];  // массив всех экземпляров класса modalService;

    constructor(id = null) {

        const findModal = Modal.modals.find(x => x.id === id)

        if (!findModal) {
            Modal.removeById(id)
        }
        Modal.modals.push(this)
        this.id = id || (Math.random() + Modal.modals.length)
    }

    public remove(): void {
        const modalEl = document.getElementById(this.id)
        modalEl.parentNode.removeChild(modalEl)
    };

    public static removeById(id: string = null): void {
        let modalId = id

        const findEl = Modal.modals.find((x) => x.id === modalId)
        if (findEl) {
            findEl.remove()
            Modal.modals = Modal.modals.filter((el) => el.id !== modalId)
        } else {
            if (Array.isArray(Modal.modals)) {
                const lastEl = Modal.modals.pop()
                if (lastEl) {
                    lastEl.remove()
                }
            }
        }
    }

    private closeModalHandler = (ev: Event): void => {
        const target = ev.target as HTMLElement;
        if (target.classList.contains('close-modal')) {
            this.remove();
        }
    }

    public open(template: string): void {
        const divWrap = document.createElement("div");
        divWrap.innerHTML = template;
        divWrap.id = this.id;
        divWrap.setAttribute('modal_id', this.id)
        divWrap.classList.add('modal-element');
        divWrap.addEventListener('click', this.closeModalHandler);
        document.body.appendChild(divWrap);
    }
}