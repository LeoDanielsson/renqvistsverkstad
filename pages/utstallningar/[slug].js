import Layout from "../../components/Layout";
import Container from "../../components/Container";
import Section from "../../components/Section";
import YoutubeVideo from "../../components/YoutubeVideo";
import fs from "fs";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export async function getStaticProps({ params }) {
  const content = await import(`../../content/exhibitions/${params.slug}.md`);
  return {
    props: { content: { attributes: content.attributes, html: content.html } }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const exhibitions = fs.readdirSync("content/exhibitions");
  return {
    paths: exhibitions.map((filename) => ({
      params: {
        slug: filename.replace(/\.md$/, ""),
      },
    })),
    fallback: false,
  };
}

const ExhibitionPage = ({
  content: {
    attributes: { title, youtubeUrl, sections },
  },
}) => {
  return (
    <Layout>
      <Container>
        <Link href="/utstallningar">
          <a className="block mb-5">&lt; Tillbaka till utställningar</a>
        </Link>
        <h1>{title}</h1>
        {youtubeUrl && (
          <div className="mb-8">
            <YoutubeVideo youtubeId={youtubeUrl} />
          </div>
        )}
        {sections.map((section, index) => (
          <Section key={index} title={section.title} image={section.image}>
            <ReactMarkdown>{section.body}</ReactMarkdown>
          </Section>
        ))}
      </Container>
    </Layout>
  );
};
export default ExhibitionPage;
