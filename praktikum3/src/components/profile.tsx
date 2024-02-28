import Image from "next/image";

export default function Profile() {
    return (
      <Image
        src="https://i.imgur.com/9WOpRsZ.png"
        alt="Katherine Johnson"
        width={100}
        height={100}
        style={{
          maxWidth: "100%",
          height: "aut",
          margin: "13px"
        }}
      />
    );
  }