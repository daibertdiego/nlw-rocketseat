import React, { useEffect, useState } from 'react';
import { Dialog } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import './styles.css';
import { FiCheckCircle } from 'react-icons/all';

interface DialogProperties {
    open: boolean;
}

const DialogView = (props: DialogProperties) => {

    const [open, setOpen] = useState<boolean>(props.open);
    const history = useHistory();

    function handleClose() {
        console.log('Handle Close manually');
        setOpen(false);
        history.push('/');
    }

    useEffect(() => {
        if (open) {
            console.log('Handle Close timeout');
            setTimeout(function () {
                setOpen(false);
                history.push('/');
            }, 2000);
        }
    }, [open]);

    useEffect(() => {
        setOpen(props.open);
    }, [props]);

    return (
        <Dialog
            id="dialog"
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            open={open}>

            <span>
                <FiCheckCircle/>
            </span>
            <h1>Cadastro concluído</h1>
        </Dialog>
    );

};

export default DialogView;
