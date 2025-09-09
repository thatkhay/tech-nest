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
      <div className="mx-auto max-w-7xl px-6 py-10 lg:py-10 bg-blue-600">
        <Category />
      </div>
    </Layout>
  );
};

export default page;
