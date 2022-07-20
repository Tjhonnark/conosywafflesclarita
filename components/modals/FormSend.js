/* STYLES */
import styles from '../../styles/Modals/FormSend.module.css'

const FormSend = ({modalFormSend, setModalFormSend }) => {

    return (
        <>
            <div className={modalFormSend?styles.container:styles.container2}>
                <div className={styles.modal}>
                    <div className={styles.header}>
                        <h3>TITLE</h3>
                    </div>
                    <div className={styles.body}>
                        Creando tu primer MODAL
                    </div>
                    <div className={styles.footer}>
                        <button onClick={() => setModalFormSend(!modalFormSend)}>
                            Sal perro
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormSend;