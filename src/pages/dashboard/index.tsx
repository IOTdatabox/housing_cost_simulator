import type { NextPage } from "next";
import Home from "../../components/Home";
import { DashboardLayout } from "../../components/layout/DashboardLayout";

const Index: NextPage = () => {
  return (
    <DashboardLayout>
      <Home />
    </DashboardLayout>
  );
};

export default Index;
