import React from 'react';
import { Grid } from '@mui/material';
import PagePaper from '../../components/PagePaper';
import BlogPostCard from './components/BlogPostCard';

const MOCK_BLOG_POSTS = [
    {
        title: 'This is a blogpost about atuff',
        sumUp: 'Fortiss sunt monss de bi-color domus. Nutrix altus habena est. Eheu, flavum coordinatae!',
        content:
            'candidatuss cantare in aboa! heu. a falsis, omnia superbus planeta. sunt rumores examinare alter, pius deuses. salvus competitions ducunt ad diatria. humani generiss trabem! ubi est velox torquis? fatalis, azureus zeluss mechanice magicae de primus, lotus gallus. rectors crescere in avenio! ubi est peritus coordinatae? rusticus, talis accolas velox prensionem de regius, domesticus caesium. sunt rumores carpseris festus, fortis parmaes. ',
        author: 'John Mike',
    },
    {
        title: 'This is a blogpost about atuff',
        sumUp: 'Fortiss sunt monss de bi-color domus. Nutrix altus habena est. Eheu, flavum coordinatae!',
        content:
            'candidatuss cantare in aboa! heu. a falsis, omnia superbus planeta. sunt rumores examinare alter, pius deuses. salvus competitions ducunt ad diatria. humani generiss trabem! ubi est velox torquis? fatalis, azureus zeluss mechanice magicae de primus, lotus gallus. rectors crescere in avenio! ubi est peritus coordinatae? rusticus, talis accolas velox prensionem de regius, domesticus caesium. sunt rumores carpseris festus, fortis parmaes. ',
        author: 'John Mike',
    },
    {
        title: 'This is a blogpost about atuff',
        sumUp: 'Fortiss sunt monss de bi-color domus. Nutrix altus habena est. Eheu, flavum coordinatae!',
        content:
            'candidatuss cantare in aboa! heu. a falsis, omnia superbus planeta. sunt rumores examinare alter, pius deuses. salvus competitions ducunt ad diatria. humani generiss trabem! ubi est velox torquis? fatalis, azureus zeluss mechanice magicae de primus, lotus gallus. rectors crescere in avenio! ubi est peritus coordinatae? rusticus, talis accolas velox prensionem de regius, domesticus caesium. sunt rumores carpseris festus, fortis parmaes. ',
        author: 'John Mike',
    },
    {
        title: 'This is a blogpost about atuff',
        sumUp: 'Fortiss sunt monss de bi-color domus. Nutrix altus habena est. Eheu, flavum coordinatae!',
        content:
            'candidatuss cantare in aboa! heu. a falsis, omnia superbus planeta. sunt rumores examinare alter, pius deuses. salvus competitions ducunt ad diatria. humani generiss trabem! ubi est velox torquis? fatalis, azureus zeluss mechanice magicae de primus, lotus gallus. rectors crescere in avenio! ubi est peritus coordinatae? rusticus, talis accolas velox prensionem de regius, domesticus caesium. sunt rumores carpseris festus, fortis parmaes. ',
        author: 'John Mike',
    },
    {
        title: 'This is a blogpost about atuff',
        sumUp: 'Fortiss sunt monss de bi-color domus. Nutrix altus habena est. Eheu, flavum coordinatae!',
        content:
            'candidatuss cantare in aboa! heu. a falsis, omnia superbus planeta. sunt rumores examinare alter, pius deuses. salvus competitions ducunt ad diatria. humani generiss trabem! ubi est velox torquis? fatalis, azureus zeluss mechanice magicae de primus, lotus gallus. rectors crescere in avenio! ubi est peritus coordinatae? rusticus, talis accolas velox prensionem de regius, domesticus caesium. sunt rumores carpseris festus, fortis parmaes. ',
        author: 'John Mike',
    },
    {
        title: 'This is a blogpost about atuff',
        sumUp: 'Fortiss sunt monss de bi-color domus. Nutrix altus habena est. Eheu, flavum coordinatae!',
        content:
            'candidatuss cantare in aboa! heu. a falsis, omnia superbus planeta. sunt rumores examinare alter, pius deuses. salvus competitions ducunt ad diatria. humani generiss trabem! ubi est velox torquis? fatalis, azureus zeluss mechanice magicae de primus, lotus gallus. rectors crescere in avenio! ubi est peritus coordinatae? rusticus, talis accolas velox prensionem de regius, domesticus caesium. sunt rumores carpseris festus, fortis parmaes. ',
        author: 'John Mike',
    },
    {
        title: 'This is a blogpost about atuff',
        sumUp: 'Fortiss sunt monss de bi-color domus. Nutrix altus habena est. Eheu, flavum coordinatae!',
        content:
            'candidatuss cantare in aboa! heu. a falsis, omnia superbus planeta. sunt rumores examinare alter, pius deuses. salvus competitions ducunt ad diatria. humani generiss trabem! ubi est velox torquis? fatalis, azureus zeluss mechanice magicae de primus, lotus gallus. rectors crescere in avenio! ubi est peritus coordinatae? rusticus, talis accolas velox prensionem de regius, domesticus caesium. sunt rumores carpseris festus, fortis parmaes. ',
        author: 'John Mike',
    },
    {
        title: 'This is a blogpost about atuff',
        sumUp: 'Fortiss sunt monss de bi-color domus. Nutrix altus habena est. Eheu, flavum coordinatae!',
        content:
            'candidatuss cantare in aboa! heu. a falsis, omnia superbus planeta. sunt rumores examinare alter, pius deuses. salvus competitions ducunt ad diatria. humani generiss trabem! ubi est velox torquis? fatalis, azureus zeluss mechanice magicae de primus, lotus gallus. rectors crescere in avenio! ubi est peritus coordinatae? rusticus, talis accolas velox prensionem de regius, domesticus caesium. sunt rumores carpseris festus, fortis parmaes. ',
        author: 'John Mike',
    },
    {
        title: 'This is a blogpost about atuff',
        sumUp: 'Fortiss sunt monss de bi-color domus. Nutrix altus habena est. Eheu, flavum coordinatae!',
        content:
            'candidatuss cantare in aboa! heu. a falsis, omnia superbus planeta. sunt rumores examinare alter, pius deuses. salvus competitions ducunt ad diatria. humani generiss trabem! ubi est velox torquis? fatalis, azureus zeluss mechanice magicae de primus, lotus gallus. rectors crescere in avenio! ubi est peritus coordinatae? rusticus, talis accolas velox prensionem de regius, domesticus caesium. sunt rumores carpseris festus, fortis parmaes. ',
        author: 'John Mike',
    },
];

export const BlogPage = () => {
    return (
        <PagePaper title="Blog">
            {MOCK_BLOG_POSTS.map((e) => {
                return (
                    <Grid item md={12}>
                        <BlogPostCard
                            title={e.title}
                            sumUp={e.sumUp}
                            content={e.content}
                            author={e.author}
                        />
                    </Grid>
                );
            })}
        </PagePaper>
    );
};

export default BlogPage;
