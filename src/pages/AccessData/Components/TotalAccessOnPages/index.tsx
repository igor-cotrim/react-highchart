import { AnalyticsColors } from "../../../../constants";
import useAnalyticsData from "../../../../hook/useAnalyticsData";
import Chart from "../../../../components/Chart";

import Eye from "../../../../assets/eye.svg";

import * as S from "./styles";

export const TotalAccessOnPages = () => {
    const { analyticsDataState } = useAnalyticsData();

    const options: Highcharts.Options = {
        title: {
            text: `<img src=${Eye} width="16" height="16" style="margin-right:8px;" alt="Ícone de view" /> Total de acessos nas páginas`,
            useHTML: true,
            align: "left",
            style: {
                padding: "30px",
                fontSize: "20px",
                color: AnalyticsColors.black,
                fontWeight: "bold",
                fontStyle: "Normal",
                fontFamily: "Inter",
            },
        },
        chart: {
            type: "column",
        },
        series: [
            {
                name: "Ignite",
                type: "column",
                data: [analyticsDataState?.totalAccessOnPages?.ignite?.value],
                color: AnalyticsColors.purple,
            },
            {
                name: "Experts Club",
                type: "column",
                data: [
                    analyticsDataState?.totalAccessOnPages?.expertsClub?.value,
                ],
                color: AnalyticsColors.ecWine,
            },
        ],
        tooltip: {
            enabled: false,
        },
        yAxis: {
            min: 0,
            title: {
                text: "",
            },
        },
        plotOptions: {
            column: {
                dataLabels: {
                    enabled: true,
                    useHTML: true,
                    color: AnalyticsColors.black,
                    inside: true,
                    verticalAlign: "bottom",
                    borderWidth: 3,
                    shadow: false,
                    style: {
                        fontSize: "36px",
                        fontWeight: "bold",
                        fontStyle: "Normal",
                        lineHeight: "44px",
                        fontFamily: "Inter",
                        textOutline: "0",
                        padding: "14px",
                    },
                },
            },
        },
    };

    return (
        <S.Wrapper>
            <Chart options={options} />
        </S.Wrapper>
    );
};

export default TotalAccessOnPages;
