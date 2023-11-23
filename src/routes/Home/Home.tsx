import { FC } from "react";
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography";

const Home: FC = () => {
    return <Container>
        <Typography variant="h2">Hello!</Typography>
        <Typography variant="body1">
            My name is Ann Kilzer. I'm a polymath, and my career is in software engineering.
            I currently work at Slalom Build as a Software Architect.

            I received my Master's in Computer Science from the University of Texas at Austin, where I spent a few years researching privacy.
            I grew up in Missoula, Montana, and attended college at Gonzaga University, where I majored in computer science, math, and art.
            I moved to Tokyo in early 2018 with no job, just an eager dream of living abroad.
            In my spare time, I enjoy Japanese Calligraphy 書道, Nihonga painting 日本画, cooking, hiking, and riding slow trains around Japan.
        </Typography>

        <Typography variant="body1">
            初めまして！杏キルザーです。 私は多趣味な人間で、職業はソフトウェアエンジニアです。
            今は スラロームビールド の ソフトウェア・アーキテクトです。

            私はミズラー市モンタナ出身で、ゴンザガ大学に進学しコンピューターサイエンス、数学、アートを学びました。
            また、テキサス大学オースティン校で数年間プライバシーについての研究に従事し、コンピュータサイエンスの修士号を取得しました。
            その後、2018年に東京に移住し、現在に至ります。 趣味は書道、日本画、料理、ハイキング、電車に乗ることです。

            よろしくお願いします。
        </Typography>
    </Container>
}

export default Home
