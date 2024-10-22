
import { Metadata } from "next";
import AdminMessage from "@/components/Message/AdminMessage"

export const metadata: Metadata = {
  title: "Admin Message Page | Technical Wallet | Architectural Digital Products & Service",
  description: "Technical Wallet | Architectural Digital Products & Service",
  // other metadata
};

const MessagePage = () => {
  return (
    <AdminMessage />
  );
};

export default MessagePage;