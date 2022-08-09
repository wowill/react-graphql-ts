type LaunchesPastDataType = {
    mission_name: string;
    id: string;
    launch_date_local: string;
    launch_site: {
        site_name_long: string;
    },
    links: {
        article_link: string;
        video_link: string;
    },
    rocket: {
        rocket_name: string;
        rocket_type: string;
    },
    launch_success: boolean;
    details: string;
}


export type LaunchNextType = {
    launch_date_local: string;
    id: string;
    launch_site: {
         site_name_long: string;
    };
    launch_success: boolean | null;
    links: {
        article_link: string | null;
        video_link: string | null;
    };
    rocket: {
        rocket_name: string;
        rocket_type: string;
    }
    details: string;
    mission_name: string;
}

type LaunchesPastListType = {
    launchesPast: LaunchesPastDataType[]
}

export type LaunchesPastType = {
    data: LaunchesPastListType
}

export type LaunchesNextType = {
    data: {
        launchNext: LaunchNextType
    }
}