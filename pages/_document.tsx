import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
} from "next/document";

import general from "../general";

class MyDocument extends Document {
  static async getInitialProps(ctx: any): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Minh họa trực quan các thao tác trên Linked List"
          />
          <meta
            name="description"
            content="Linked list là một data structure bao gồm tập hợp các object được lưu tại các vùng nhớ rời rạc, được liên kết với nhau thông qua pointer. Mỗi object hay phần tử dữ liệu — gọi là node — sẽ trỏ đến node kế tiếp trong linked list."
          />
          <meta
            name="description"
            content="Quan sát trực quan cách các thao tác trên linked list được thực hiện."
          />
          <meta name="description" content="GB" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={"true"}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
