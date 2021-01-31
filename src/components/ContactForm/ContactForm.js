import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import { addContact } from '../../redux/contacts/contacts-operations';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const { register, control, handleSubmit, errors, reset } = useForm();
  const phoneRegExp = /^\+380\s\(([0-9]{2})\)\s([0-9]{3})-([0-9]{4})$/;

  const addNewContact = ({ name, number }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts.`);
      reset({
        name: '',
        number: '',
      });
      return;
    }
    const contact = { name, number };
    dispatch(addContact(contact));
    reset({
      name: '',
      number: '',
    });
  };

  return (
    <form
      className={s.form}
      onSubmit={handleSubmit(addNewContact)}
      autoComplete="off"
    >
      <label className={s.label} htmlFor="name">
        Name
      </label>
      <input
        className={s.input}
        name="name"
        type="text"
        ref={register({ required: true })}
      />
      {errors.name && <p className={s.text}>This field is required!</p>}

      <label className={s.label} htmlFor="number">
        Number
      </label>
      <Controller
        name="number"
        control={control}
        defaultValue={false}
        rules={{
          required: true,
          pattern: phoneRegExp,
        }}
        render={({ value, onChange }) => (
          <NumberFormat
            className={s.input}
            type={'tel'}
            format="+380 (##) ###-####"
            mask="_"
            allowEmptyFormatting
            value={value}
            onChange={onChange}
          />
        )}
      />
      {errors.number && <p className={s.text}>This field is required!</p>}
      {errors.number?.type === 'pattern' && (
        <p className={s.text}>Phone number is not valid!</p>
      )}

      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
