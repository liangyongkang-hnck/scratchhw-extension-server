function addBlocks(Blockly) {
    const color = '#99CCFF';
    // const dhtIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI0NDJweCIgaGVpZ2h0PSIxODhweCIgdmlld0JveD0iMCAwIDQ0MiAxODgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDQ0MiAxODgiIHhtbDpzcGFjZT0icHJlc2VydmUiPiAgPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSI0NDIiIGhlaWdodD0iMTg4IiB4PSIwIiB5PSIwIgogICAgaHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFib0FBQUM4Q0FNQUFBQTVCNXNlQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk4KQUFCNkpRQUFnSU1BQVBuL0FBQ0E2UUFBZFRBQUFPcGdBQUE2bUFBQUYyK1NYOFZHQUFBQXBWQk1WRVgvLy84VkZSZGozLzh3WkhkaQpYVnQ1Y25DSmduNUVRVUVpSWlPUGg0TnpiV3BGUWtKWFVsRWVIUjhzTEN4ZVVWWXJLU3BCUGo1V1VWQm5ZbUIyY0cyQ2UzaUtnMzh3CkxpOVFURXh1YVdhTGc0QThPanBqWGx5SWdIMDROalprWDEwa0l5VlZVVkNGZm5vM05UVnNabVI4ZFhKS1IwYUZmbnVJZ1gxeGEyZysKT3pzcktpb2RIUjRXRmhpS2duNWhYRm82TnpodWFHWmVXVmNuSmlkWVZGSWJHeDMvLy8veXl5bVNBQUFBQVhSU1RsTUFRT2JZWmdBQQpBQUZpUzBkRUFJZ0ZIVWdBQUFBSmNFaFpjd0FBQ3hNQUFBc1RBUUNhbkJnQUFBQUhkRWxOUlFma0RBZ0JPREtmejdHV0FBQUZYa2xFClFWUjQydTNkYTNQVE9oQ0hjYUNYSEhNNDBLYjMrNVZDMDVhV2xuNy9yOFlNRENkeVF1eTFvdFd1N09mL05qdDAwRy9peUZySmZ2T1cKNU0rYkpMSCtYd3d5MEJVYjZJb05kTVVHdW1JRFhiR0JydGhBVjJ5Z0t6YlFGUnZvaWswaXVuZjlqTFVPZE5CQjV5clFRZGZMV090QQpCeDEwcmdJZGRMMk10UTUwMEVIbkt0QkJ0MVJXNXBQZUllS1BXT3YwZzI1bGFWN29vSE1TNktDRERqcm9vSU1PT3FlQkRqcm9vSU1PCk91aWdjeHJvb0lNT09rOTBxMnZyNjJ1cm8zK3NsWVpPRjVIcWQ5Ny9hODBFWFNSZFZYMzR6eHJLSzEyY2JrYTY2b00xVk1GMEpwblMKVmY2dW1kQUo2ZDY3bTZ0QUo2U3JSdFpVME1YU3JWcFRRUmRMdDVhYjVtTnJvSlBSclVOWFVxQXJObHd3aTQzcE5BVzZWSFRaYnc2ZwpTMFNYLzVZY3VrUjArUmZDUE5DMXJ4eXJOT01TckU2YkxqL25vMXNHeGoyZFJkTUh1Z1IwTnEzVzN0QzFWTVQ5QzIyNnBoc2NvRnVHCnpvUU1PdWlnYzBMM1NTWFFRUWNkZE5CQkJ4MTAwRUVIWFNhNmpjM3gxdmJPYnJXN3M3MDEzdHlBcmhDNnZmMkR3N0JiV3gwZTdPOUIKNTUvdTZQaWttcy9KOFZFY0hhc3B1ZWhPejZwRk9UdDFScmM0QTZRN3Y3aXNGdWZ5NGh3Nlpicllwcy9WZGRXYzZ5dm9kT2tpVzYyagp6MVZiUHJkdk1QTkFseU9xZEIwM09OeDhhWldycWk4MzBHa21hbHZSelZlQlhGVjliYk9ETGcyZGZEUGZTUEtkKy9XOWE3bG1RcGVJClRycUY5cXI5ZCs3LzM3c3I2SExRQ1RldW43Zk5MY05jbjBPWGcwNTJYT1JpSHVoMlBMbTdmN2kvbTR4dlp6KzZnQzRIbmVpUTF1bnMKbmZpM3g2Zmc0NmZIYjdWUEw1dldWYUJMUlNjNkdqbTcrdlY5TWxNdytWNzcvQXc2SjNSSE0zTFBMM01sTDgrMWlvYTFhT2hTMFVrdQptTWQxdVIrdmY2bDUvUkdXSEVPblR5ZVlwdXpWdXp6UHIzK3RlZzIvZHllTCszZlFwYUlUM0J6czEzL25YaGFVdllTL2QvdlFhZE5KCmJza1BhblBMeWNLNlNURFBQSEJBSjE3VGpVcm5sZVBVZElLRnNJM2Fib2JIaHNySGFkbmh3djBxSHVpaW1qN082Q1RMejV1MTYrVlQKUStWVFVMYzVkTHFJams0WE9sSFRaeHpLM1RhVzNrNEx4OURGOU91RWRNSlc2MVpJTjI0c0RaUzNvTk9nNjdiQllUdWttelNXVHFhRgoyOUJwME1uSS9tUW5wTHRyTEwyYkZ1NUFaMCszRzlMZE41YmVUd3Qzb2JPbnEwMHdIeHBMSDRKS0lWMlczYzlEcGRQOTFrR25TS2Y3Cld3ZWRJcDN1REJNNlJUcmQrenJvRk9sMFYxT2dVNlRUWGNPRVRwRk90M01BblNLZGJyOE9PazI2VXJ2a2ZhUWJkVnQvSHVMZUZLOTAKZndaWWVzQ09IV0ZwOEJQU1NRL1lzUTlUaHk0aXdSakxEdGl4KzlsTHdsRVdYVE01YytBbDRURExEdGh4MHNkSmF1TXNPbURIK1RvbgpxUTIwN0lBZHAxcDlwRGJTd3JlZ2NaYmNSV3BETFgzM0lFOXc4SkFvT3A2YjRpRXhGOHkzUEszSVF5S21LYi9TbTJlRWxadmFjSGQ1CmJXUmZuc3hYYnNMeDd2amF5SDQ4RDdNMUdzdVB5ZWs2dndpdG5LZlFHdE9wOEFkREh2UGF5S1RQZnRhamF4aXpwWnR4a3BxWWhsN3kKcHM5ODBqMXhIYm9vT3BQWFJrSzNERjNIRFE3USthR3pFSU1PT3VpZ2d3NjZvZExwN1g2R0Rqcm9vSU1PT3VpZ2d3NDY2S0NERGpybwpHdWowVmxPc28wSTNqS2FQZFZUb2h0RnE3V1dXMytBQW5UbGQxTFlpNkZ6UWRkL01CNTBYdW81YmFLSHpROWRwNHpwMDFvazlMZ0tkCmVXcDA4a05hME5tblJpYytHcGtwS2VDZ2c4NWRUQytZMENXanl6MU5nUzRaWGU2Ymd3TG9WcUpXaHJQVFpiOGxoeTRWblVYekFMb1UKZFBtWG4vdERaMkZyMnZTQnJ1SHZpT2xNV3EzUUxVTm51c0VCdW1Yb3JIV2dndzQ2VjRFT091aWdndzQ2NktCekd1aWdndzQ2NktDRApUcDB1Y3VTaEd3NWRSS3gxb0lQT2xzNGkxanJRUVFlZHEwQUhYUzlqclFNZGROQzVDblJEcHlQNUExMnhnYTdZUUZkc29DczIwQldiCkpISS9BWjd3VFRwYVR2clJBQUFBSlhSRldIUmtZWFJsT21OeVpXRjBaUUF5TURJd0xURXlMVEE0VkRBeE9qVTJPalV3S3pBd09qQXcKaDJQUDdnQUFBQ1YwUlZoMFpHRjBaVHB0YjJScFpua0FNakF5TUMweE1pMHdPRlF3TVRvMU5qbzFNQ3N3TURvd01QWStkMUlBQUFBQQpTVVZPUks1Q1lJST0iIC8+Cjwvc3ZnPgo=';

    Blockly.Blocks['l298n_init'] = {
        init: function () {
            this.jsonInit({

                "message0": Blockly.Msg.L298N_INIT,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "motor_name"
                   
                    },
                    {
                        "type": "input_value",
                        "name": "pin",

                    },
                    {
                        "type": "input_value",
                        "name": "speed_pin",
                  
                    }
                    
                ],
                "colour": color,
                "extensions": ["shape_statement"]
            });
        }
    };
    Blockly.Blocks['l298n_motor_control'] = {
        init: function () {
            this.jsonInit({
                "message0": Blockly.Msg.L298N_MOTOR_CONTROL,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "motor_name"
                    },
                    {
                        "type": "field_dropdown",
                        "name": "direction",
                        "options": [
                            ['正转', 1],
                            ['反转', 2],
                            ['停止', 0]]
                       
                    },
                    {
                        "type": "input_value",
                        "name": "speed",                        
                    }
                ],
                "colour": color,
                "extensions": ["shape_statement"]
            });
        }
    };
   


    return Blockly;
}

exports = addBlocks;
