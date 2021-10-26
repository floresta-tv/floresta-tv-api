/*
 *
 * HomePage
 *
 */
/* eslint-disable */
import React, { memo } from "react";
import { FormattedMessage } from "react-intl";
import PageTitle from "../../components/PageTitle";

import {
  ALink,
  Block,
  Container,
  LinkWrapper,
  P,
  Separator,
} from "./components";
import SocialLink from "./SocialLink";

const FIRST_BLOCK_LINKS = [
  {
    link: "https://strapi.io/documentation/v3.x/getting-started/quick-start.html#_4-create-a-category-content-type",
    contentId: "app.components.BlockLink.documentation.content",
    titleId: "app.components.BlockLink.documentation",
  },
  {
    link: "https://github.com/strapi/foodadvisor",
    contentId: "app.components.BlockLink.code.content",
    titleId: "app.components.BlockLink.code",
  },
];

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    link: "",
  },
  {
    name: "Slack",
    link: "",
  },
  {
    name: "Twitter",
    link: "",
  },
];

const HomePage = () => {
  return (
    <>
      <FormattedMessage id="HomePage.helmet.title">
        {(title) => <PageTitle title={title} />}
      </FormattedMessage>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <Block>
              <h2 id="mainHeader">
                Bem vindo a ao painel de administração Floresta.TV.
              </h2>
              <P>Ao lado você pode editar o conteúdo do nosso site :)</P>
            </Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
