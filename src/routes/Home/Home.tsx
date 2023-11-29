import { FC } from 'react';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import ImageCard from '@/components/ImageCard/ImageCard';
import Body1 from '@/components/TextBlock/Body1';

const Home: FC = () => {
    return <Container>
        <Grid container>
            <Grid item lg={6}>
                <Typography variant="h2">Hello!</Typography>
                <Body1>
                    My name is Ann Kilzer. I&apos;m a polymath, and my career is in software engineering.
                    I currently work at Slalom Build as a Software Architect.
                </Body1>

                <Body1>
                    I received my Master&apos;s in Computer Science from the University of Texas at Austin, where I spent a few years researching privacy.
                    I grew up in Missoula, Montana, and attended college at Gonzaga University, where I majored in computer science, math, and art.
                    I moved to Tokyo in early 2018 with no job, just an eager dream of living abroad.
                    In my spare time, I enjoy Japanese Calligraphy 書道, Nihonga painting 日本画, cooking, hiking, and riding slow trains around Japan.
                </Body1>

                <Body1>
                    初めまして！杏キルザーです。 私は多趣味な人間で、職業はソフトウェアエンジニアです。
                    今は スラロームビールド の ソフトウェア・アーキテクトです。
                </Body1>
                <Body1>
                    私はミズラー市モンタナ出身で、ゴンザガ大学に進学しコンピューターサイエンス、数学、アートを学びました。
                    また、テキサス大学オースティン校で数年間プライバシーについての研究に従事し、コンピュータサイエンスの修士号を取得しました。
                    その後、2018年に東京に移住し、現在に至ります。 趣味は書道、日本画、料理、ハイキング、電車に乗ることです。

                    よろしくお願いします。
                </Body1>
            </Grid>
            <Grid item lg={6}>
                <ImageCard
                    src='ann-kilzer.jpg'
                    alt="Portrait of Ann Kilzer wearing a green coat"
                    width={500}
                />
            </Grid>
        </Grid>

    </Container>
}

export default Home
