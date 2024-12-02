import { $UserInfo, $Label, $Icon, $Info } from "./UserInfo.styles.jsx";
import { CiUser } from "react-icons/ci";

export default function UserInfo() {

    const userData = JSON.parse(sessionStorage.getItem("userData"));

    return (
        <$UserInfo>
            <$Label>
                <$Icon>
                    <CiUser />
                </$Icon>
                <$Info>
                    {userData?.commonName} {userData?.surname} <div>{userData?.group}</div>
                </$Info>
            </$Label>
        </$UserInfo>
    )
}
