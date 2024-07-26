import ReactMarkdown from "react-markdown";
import Container from "../components/Container";
import Layout from "../components/Layout";
import content from "../content/pages/contact.md";

const Contact = () => (
  <Layout title="Kontakt">
    <Container>
      <h1>{content.attributes.title}</h1>
      <div className="grid gap-x-8 grid-cols-5">
        <div className="col-span-5 md:col-span-2">
          <ReactMarkdown>{content.attributes.text}</ReactMarkdown>
        </div>
        <a
          className="col-span-5 md:col-span-3"
          href="https://www.google.com/maps/place/Renqvists+verkstad/@59.3354556,18.2432392,12.08z/data=!4m5!3m4!1s0x465f83d5bb10d64f:0xddc8c3fb4df625aa!8m2!3d59.348078!4d18.2756484"
          target="_blank"
        >
          <img src={content.attributes.map} />
        </a>
      </div>
    </Container>
  </Layout>
);

export default Contact;
