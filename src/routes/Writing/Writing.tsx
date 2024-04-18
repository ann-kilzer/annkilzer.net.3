import { FC } from 'react'
import Container from '@mui/material/Container'
import Article from '@/components/Article/Article'

interface WritingProps {
}

const Writing: FC<WritingProps> = () => {
    return <Container>
        <Article
            title="Sample Blogpost"
            subtitle="Subtitle"
            body="Lorum ipsum dolor sit amet"
            date={new Date('2024-04-18')}
            tags={['one', 'two', 'tag three']}
        />
    </Container>
}

export default Writing
