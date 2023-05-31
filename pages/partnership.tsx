import React from "react";
import Container from "@/components/atoms/container";
import PageHeader from "@/components/molecules/page-header";
import Footer from "@/components/organisms/footer";
import Navbar from "@/components/organisms/navbar";
import SingleNews from "@/components/organisms/single-news";
import SingleArticle from "@/components/templates/single-article";

const partnership = () => {
  const title = "Zapraszamy do współpracy";
  const lead =
    "Pellentesque in quam gravida, sagittis elit et, semper ipsum. Sed mattis, risus ac fringilla molestie, risus arcu porttitor lectus, a vulputate felis dolor eu enim. Fusce dapibus id lectus nec pulvinar. Pellentesque egestas lobortis mi at tempus.";
  const img = "img14.jpg";
  const content =
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis ipsum eget magna tempus feugiat. Quisque eu justo magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer ac finibus mi. Aenean dapibus justo commodo elit cursus, at posuere mi molestie. </p><p> Pellentesque in quam gravida, sagittis elit et, semper ipsum. Sed mattis, risus ac fringilla molestie, risus arcu porttitor lectus, a vulputate felis dolor eu enim. Fusce dapibus id lectus nec pulvinar. Pellentesque egestas lobortis mi at tempus. Phasellus at libero turpis. Nullam ac semper sem. Nam dapibus mauris nunc, et dictum odio interdum semper. In hac habitasse platea dictumst. Phasellus nunc justo, pharetra quis nisl ut, finibus euismod enim. Aliquam erat volutpat. Vestibulum rutrum magna nulla, vitae interdum orci commodo nec. Morbi finibus eu ipsum lobortis condimentum. Nam feugiat ante nec enim suscipit tempus. Praesent quis luctus arcu.</p>";

  return (
    <div>
      <Navbar />
      <Container>
        <PageHeader>Współpraca</PageHeader>
        <SingleArticle title={title} lead={lead} content={content} img={img} />
      </Container>
      <Footer />
    </div>
  );
};

export default partnership;
