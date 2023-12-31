import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  table: any = ``;
  tableHtml: any = [];
  chart: any = ``;
  chartHtml: any = [];
  layout: any = ``;
  layoutHtml: any;

  onChangeTable(e: any) {
    try {
      this.tableHtml = JSON.parse(this.table);
    } catch (error) {
      console.log(error);
    }
  }
  onChangeLayout(e: any) {
    try {
      // this.layoutHtml = JSON.parse(this.layout);
      let idx = 1;
      const data = [];
      const array = JSON.parse(this.layout);
      for (const a of array) {
        for (const c of a) {

          // name: c.name,
          // type: c.type,
          c.type_check = ['HTML','MAP','COLUMN_GROUP_CHART','BAR_STACK_CHART','COLUMN_STACK_CHART','TABLE','COLUMN_CHART', 'LINE_CHART', 'BAR_CHART', 'BAR_NEGATIVE_CHART', 'GAUGE_CHART', 'DONUT_CHART', 'PIE_CHART'].indexOf(c.type) > -1 ? '/' : 'X',
            // column_size: c.column_size

            idx++
        }
      }
      this.layoutHtml = array;
      console.log(array);


    } catch (error) {
      console.log(error);
    }
  }
  onChangeChart(e: any) {
    try {
      let idx = 1;
      const data = [];
      const array = JSON.parse(this.chart);
      for (const c of array) {
        data.push({
          "label": c.label,
          "label_check": c.label == '' ? 'X' : '/',
          "sub_label": c.sub_label,
          "sub_label_check": c.sub_label == '' ? 'X' : '/',
          "name": c.name,
          "name_check": c.name == `CHART_${idx}` ? '/' : 'X',
          "source": c.source,
          "source_check": c.source == 1 ? '/' : 'X',
          "serie_name": c.serie_name,
          "serie_name_check": c.serie_name == 'a_name' ? '/' : 'X',
          "serie_data": c.serie_data,
          "serie_data_check": c.serie_data == null ? '/' : 'X',
          "type": c.type,
          "type_check": ['COLUMN','MAP','COLUMN_GROUP', 'BAR_STACK','COLUMN_STACK','LINE', 'BAR', 'BAR_NEGATIVE', 'GAUGE', 'DONUT', 'PIE'].indexOf(c.type) > -1 ? '/' : 'X',
          "digit_number": c.digit_number,
          "digit_number_check": !isNaN(c.digit_number) ? '/' : 'X',
          "target_chart": c.target_chart,
          "target_chart_check": (array.length == 1 && c.target_chart == null) || (array.length > 1 && !isNaN(c.target_chart)) ? '/' : 'X',
        })
        idx++;
      }
      this.chartHtml = data;
      // this.chartHtml = JSON.parse(this.chart);
      // console.log(this.chartHtml);

    } catch (error) {
      this.chartHtml = [{ label: "ERROR" }];
      console.log(error);

    }

  }
}
