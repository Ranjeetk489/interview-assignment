import { gql, useQuery } from "@apollo/client";

const GET_ANIMES = gql`
    query GET_ANIMES($page:Int, $perPage: Int ) {
        Page(page: $page, perPage: $perPage){
        media(sort:POPULARITY_DESC){
        id
        title {
            english
        }
        genres
        description
        bannerImage
        averageScore
        }
    }
}
`;

export const useGetAnimes = () => {
	const { data } = useQuery(GET_ANIMES, {
		variables: { page: 2, perPage: 10 },
	});
	return data?.Page?.media;
};
