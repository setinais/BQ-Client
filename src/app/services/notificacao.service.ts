declare var $: any;

export class NotificacaoService{
    showNotification(message: string, type: string){
        // '','info','success','warning','danger'
        $.notify({
            icon: '',
            message: `<h5>${message}</h5>`
        },{
            type: type,
            timer: 800,
            placement: {
                from: 'top',
                align: 'center'
            }
        });
    }
}