import React from "react";
import Blog, { BlogCode } from "../components/Blogs/Blog";
import SubscribeForm, {
  SubscribeFormCode,
} from "../components/email-newsletter/SubscribeForm";
import Blogdetails, { BlogdetailsCode } from "../components/Blogs/Blogdetails";
import ComponentShowcase from "../layoutComponents/ComponentShowcase";

const Blogs = () => {
  return (
    <div>
      {" "}
      <ComponentShowcase
        pageTitle="About"
        components={[
          { component: <Blog />, codeString: BlogCode },
          { component: <Blogdetails />, codeString: BlogdetailsCode },
          // { component: <SubscribeForm />, codeString: SubscribeFormCode },
        ]}
      />
    </div>
  );
};

export default Blogs;
