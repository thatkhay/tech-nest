import Category from "@/componets/Category";
import Input from "@/componets/Input";
import Layout from "@/componets/ui/Layout";
import React from "react";

const page = () => {
  return (
    <Layout className="min-h-screen">
      <div className="flex justify-center align-center p-5">
        <Input />
      </div>
      <div className="">
        <Category />
      </div>
    </Layout>
  );
};

export default page;
