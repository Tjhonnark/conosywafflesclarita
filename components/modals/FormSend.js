/* STYLES */
import styles from '../../styles/Modals/FormSend.module.css'

const FormSend = ({ modalFormSend, setModalFormSend }) => {

    const resetForm = () => {
        setModalFormSend(!modalFormSend)
        window.location.reload();
    }

    return (
        <>
            <div className={modalFormSend?styles.container:styles.container2}>
                <div className={styles.modal}>
                <i className="bi bi-check-circle-fill"></i>
                    <div className={styles.header}>
                        <h3>¡Gracias!</h3>
                    </div>
                    <div className={styles.body}>
                        <p>
                        Sus datos han sido enviados con éxito.
                        </p>
                    </div>
                    <div className={styles.footer}>
                        <button onClick={resetForm}>
                            Listo
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormSend;