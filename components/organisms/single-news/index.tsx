import Divider from "@/components/atoms/divider";
import SectionParagraph from "@/components/atoms/section-paragraph/SectionParagraph";
import SectionTitle from "@/components/atoms/section-title";
import React from "react";

const SingleNews = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <SectionTitle>Lorem ipsum</SectionTitle>
      <Divider />
      <p className="max-w-2xl font-semibold my-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        aspernatur architecto doloribus tempore voluptatibus, nemo dolorem quia
        laudantium dolorum dignissimos incidunt! Et, voluptates. Fugiat soluta
        totam vel numquam sunt dolorum.
      </p>
      <img src="img14.jpg" className="h-96 object-cover rounded-lg" />
      <div className="max-w-2xl">
        <div className="my-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            laboriosam, repellendus, qui explicabo aspernatur repellat placeat
            non neque unde tenetur mollitia dolorum, sequi quae nisi. Aut
            doloremque veritatis hic sequi.
          </p>

          <SectionParagraph>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?{" "}
          </SectionParagraph>

          <SectionParagraph>
            {" "}
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best, every pleasure is
            to be welcomed and every pain avoided. But in certain circumstances
            and owing to the claims of duty or the obligations of business it
            will frequently occur that pleasures have to be repudiated and
            annoyances accepted. The wise man therefore always holds in these
            matters to this principle of selection: he rejects pleasures to
            secure other greater pleasures, or else he endures pains to avoid
            worse pains.{" "}
          </SectionParagraph>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
