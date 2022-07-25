/* STYLES */
import styles from '../../styles/Modals/FormSend.module.css'

const FormSend = ({modalFormSend, setModalFormSend }) => {

    return (
        <>
            <div className={modalFormSend?styles.container:styles.container2}>
                <div className={styles.modal}>
                <div className={styles.ifake}></div>
                <i class="bi bi-check-circle-fill"></i>
                    <div className={styles.header}>
                        <h3>¡Gracias!</h3>
                    </div>
                    <div className={styles.body}>
                        <p>
                        Sus datos han sido enviados con éxito.
                        </p>
                    </div>
                    <div className={styles.footer}>
                        <button onClick={() => setModalFormSend(!modalFormSend)}>
                            Ok
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormSend;