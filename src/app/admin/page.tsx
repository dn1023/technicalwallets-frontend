import { Metadata } from "next";
import Admin from "@/components/Admin"

export const metadata: Metadata = {
  title: "Admin Page | Technical Wallet | Architectural Digital Products & Service",
  description: "Technical Wallet | Architectural Digital Products & Service",
  // other metadata
};

const AdminPage = () => {
  return (
    <Admin />
  );
};

export default AdminPage;