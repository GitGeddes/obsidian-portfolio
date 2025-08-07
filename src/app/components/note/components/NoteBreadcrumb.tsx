import { Breadcrumbs, Link } from "@mui/material";

type NoteBreadcrumbProps = {
    path: string;
}

export default function NoteBreadcrumb(props: NoteBreadcrumbProps) {
    return (
        <div className="column breadcrumb">
            <Breadcrumbs
                style={{
                    color: "#666666",
                    fontSize: "13px"
                }}
            >
                {
                    props.path.split('/').map(p => {
                        return (
                            <Link
                                underline="hover"
                                color="#b3b3b3"
                                fontSize="13px"
                                key={p}
                            >
                                {p}
                            </Link>
                        );
                    })
                }
            </Breadcrumbs>
        </div>
    );
}