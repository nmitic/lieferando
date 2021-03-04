import Layout from '../../shared/Layout';
import ContactForm from './ContactForm';
import Title from '../../shared/Title';

const Contact = () => {
  return (
    <Layout>
      <Title text="Contact us"/>
      <ContactForm />
    </Layout>
  );
};

export default Contact;