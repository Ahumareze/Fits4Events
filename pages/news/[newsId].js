import { useRouter } from 'next/router';

function DetailsPage(props) {
    const router = useRouter();

    return (
        <div>
            <h1>{router.query.newsId}</h1>
        </div>
    );
}

export default DetailsPage;