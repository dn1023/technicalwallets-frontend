import { Metadata } from "next";
import UserPage from "@/components/UserPage"

export const metadata: Metadata = {
  title: "User Page | Technical Wallet | Architectural Digital Products & Service",
  description: "Technical Wallet | Architectural Digital Products & Service",
  // other metadata
};

const MyPage = () => {
  return (
    <UserPage />
  );
};

export default MyPage;
