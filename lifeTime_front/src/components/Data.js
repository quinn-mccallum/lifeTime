import React from "react";
import Chart from 'chart.js';

import { Card } from 'antd';

class Data extends React.Component {

  componentDidUpdate() {
    if (JSON.stringify(this.props.profile) !== "{}") {
      let ctx = document.getElementById("myChart");
      let cDoughnut = document.getElementById("cDoughnut");

      let sp = this.props.profile;
      let spfree = 24 - (sp.sleep + sp.care + sp.chores + sp.work + sp.phone + sp.tv);

      let age = sp.age;

      let sn = this.props.national;
      let snfree = 24 - (sn[String(age)].sleep + sn[String(age)].care + sn[String(age)].chores + sn[String(age)].work + sn[String(age)].phone + sn[String(age)].tv)

      let data = {
        labels: ["Sleep", "Personal Care", "Chores", "Work", "Phone", "TV", "Free Time"],
        datasets: [
          {
            label: "Your Data",
            backgroundColor:
              ["rgba(130, 151, 173, 0.7)",
                "rgba(229, 209, 210, 0.7)",
                "rgba(155, 204, 190, 0.7)",
                "rgba(248, 192, 200, 0.7)",
                "rgba(168, 147, 186, 0.7)",
                "rgba(255, 225, 158, 0.7)",
                "rgba(180, 212, 238, 0.7)",],
            borderColor:
              ["rgba(130, 151, 173, 1)",
                "rgba(229, 209, 210, 1)",
                "rgba(155, 204, 190, 1)",
                "rgba(248, 192, 200, 1)",
                "rgba(168, 147, 186, 1)",
                "rgba(255, 225, 158, 1)",
                "rgba(180, 212, 238, 1)",],
            data: [sp.sleep, sp.care, sp.chores, sp.work, sp.phone, sp.tv, spfree]
          },
          {
            label: "National Average",
            backgroundColor:
              ["rgba(130, 151, 173, 0.4)",
                "rgba(229, 209, 210, 0.4)",
                "rgba(155, 204, 190, 0.4)",
                "rgba(248, 192, 200, 0.4)",
                "rgba(168, 147, 186, 0.4)",
                "rgba(255, 225, 158, 0.4)",
                "rgba(180, 212, 238, 0.4)",],
            borderColor:
              ["rgba(130, 151, 173, 1)",
                "rgba(229, 209, 210, 1)",
                "rgba(155, 204, 190, 1)",
                "rgba(248, 192, 200, 1)",
                "rgba(168, 147, 186, 1)",
                "rgba(255, 225, 158, 1)",
                "rgba(180, 212, 238, 1)",],
            data: [sn[String(age)].sleep, sn[String(age)].care, sn[String(age)].chores, sn[String(age)].work, sn[String(age)].phone, sn[String(age)].tv, snfree],
          },
        ]
      };

      let done = function () {
        /* let barline = this.toBase64Image();
        let doughnutline = this.toBase64Image();
        axios.post("http://localhost:8080/data", {"barline": barline, "doughnutline": doughnutline})
          .catch(error => {
            console.log(error);
          }) 
        console.log(doughnutline); */
      }

      let myBarChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
          barValueSpacing: 20,
          scales: {
            yAxes: [{
              ticks: {
                min: 0,
              }
            }]
          },
          animation: {
            onComplete: done
          },
          legend: {
            position: "bottom"
          }
        }
      });

      let doughnutdata = {
        labels: ["Sleep", "Personal Care", "Chores", "Work", "Phone", "TV", "Free Time"],
        datasets: [
          {
            label: "Your Data",
            backgroundColor:
              ["rgba(130, 151, 173, 0.4)",
                "rgba(229, 209, 210, 0.4)",
                "rgba(155, 204, 190, 0.4)",
                "rgba(248, 192, 200, 0.4)",
                "rgba(168, 147, 186, 0.4)",
                "rgba(255, 225, 158, 0.4)",
                "rgba(180, 212, 238, 0.4)",],
            borderColor:
              ["rgba(130, 151, 173, 1)",
                "rgba(229, 209, 210, 1)",
                "rgba(155, 204, 190, 1)",
                "rgba(248, 192, 200, 1)",
                "rgba(168, 147, 186, 1)",
                "rgba(255, 225, 158, 1)",
                "rgba(180, 212, 238, 1)",],
            data: [sp.sleep, sp.care, sp.chores, sp.work, sp.phone, sp.tv, spfree]
          }
        ]
      }

      let myDoughnutChart = new Chart(cDoughnut, {
        type: 'doughnut',
        data: doughnutdata,
        options: {
          cutoutPercentage: 35,
          animation: {
            onComplete: done
          },
          legend: {
            position: "bottom"
          }
        }
      });
    }

  }

  render() {
    return (
      <div>
        <Card style={{ padding: "50px", margin: "50px" }}>
          <div style={{ width: '50%', display: "inline-block" }}>
            <canvas id="myChart" width="100" height="100"></canvas>
          </div>
          <div style={{ width: '50%', display: "inline-block" }}>
            <canvas id="cDoughnut" width="100" height="100"></canvas>
          </div>
        </Card>
      </div>
    )
  }
}

export default Data;