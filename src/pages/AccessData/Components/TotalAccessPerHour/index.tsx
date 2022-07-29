import { TooltipFormatterContextObject } from "highcharts";

import { AnalyticsColors } from "../../../../constants";
import useAnalyticsData from "../../../../hook/useAnalyticsData";
import Chart from "../../../../components/Chart";
import CustomChartTitle from "../../../../components/CustomChartTitle";

import * as S from "./styles";

const TotalAccessPerHour = () => {
    const { analyticsDataState } = useAnalyticsData();

    const options: Highcharts.Options = {
        title: {
            text: "",
        },
        series: [
            {
                type: "column",
                name: "Experts Club",
                color: AnalyticsColors.ecWine,
                data: analyticsDataState.totalAccessOnPagesByHour?.expertsClub,
            },
            {
                type: "spline",
                name: "Ignite",
                color: AnalyticsColors.purple,
                data: analyticsDataState.totalAccessOnPagesByHour?.ignite,
            },
        ],
        xAxis: {
            min: 0,
            max: 23,
            tickInterval: 1,
        },
        yAxis: {
            title: {
                text: "",
            },
        },
        legend: {
            align: "left",
            verticalAlign: "top",
            margin: 40,
        },
        tooltip: {
            useHTML: true,
            formatter() {
                const self: TooltipFormatterContextObject = this;
                return `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px; z-index: 1">
                <h1 style="font-size: 30px; font-family: Inter; color: ${AnalyticsColors.black}; margin: 0px;"> ${self.point.y}</h1>
                <span style="font-size: 16px; font-weight: 500; font-style: normal; color: ${AnalyticsColors.darkGray}"> Acessos </span>
                </div>`;
            },
        },
    };

    return (
        <S.Wrapper>
            <CustomChartTitle
                description="Acompanhe a quantidade de acesso por hora nas páginas do ignite e do experts club"
                title="Total de acessos por hora nas páginas"
            />
            <Chart options={options} />
        </S.Wrapper>
    );
};

export default TotalAccessPerHour;
