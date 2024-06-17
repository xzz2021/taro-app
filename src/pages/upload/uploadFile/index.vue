<template>
    <div class="upload_container">
        <div class="upload_box">
            <nut-uploader :before-xhr-upload="beforeXhrUpload">
                <nut-button type="success" size="normal" color="#1648d3" shape="square">上传图纸文件
                    <!-- <template #icon> </template> -->
                </nut-button>
            </nut-uploader>
            <div class="msg_box">
                <p>支持多文件同时上传</p>
                <p>(格式: <em style="color:red">STL(推荐)</em>/STEB/IGS/STP)</p>
            </div>
        </div>
        <div class="tips_box">
            <p>打印须知</p>
            <p>保密须知</p>
        </div>
    </div>

 </template>
 
 <script setup lang="ts">

const beforeXhrUpload = (taroUploadFile, options) => {
      //taroUploadFile  是 Taro.uploadFile ， 你也可以自定义设置其它函数
      const uploadTask = taroUploadFile({
        url: options.url,
        filePath: options.taroFilePath,
        fileType: options.fileType,
        header: {
          'Content-Type': 'multipart/form-data',
          ...options.headers
        }, //
        formData: options.formData,
        name: options.name,
        success(response: { errMsg; statusCode; data }) {
          if (options.xhrState == response.statusCode) {
            options.onSuccess?.(response, options);
          } else {
            options.onFailure?.(response, options);
          }
        },
        fail(e) {
          options.onFailure?.(e, options);
        }
      });
      options.onStart?.(options);
      uploadTask.progress((res) => {
        options.onProgress?.(res, options);
        // console.log('上传进度', res.progress);
        // console.log('已经上传的数据长度', res.totalBytesSent);
        // console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend);
      });
      // uploadTask.abort(); // 取消上传任务
    }
 </script>
 
 <style lang="scss">
 .upload_container{
    background: white;
    height: 300px;
    border-radius: 36px;
    margin: 30px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    text-align: -webkit-right;
    .upload_box{
        display: flex;
    flex-direction: column;
    height: 70%;
    align-items: center;
    justify-content: flex-end;
        .msg_box{
            font-size: 26px;
            text-align: center;
            // margin: 10px 0;
        }
        .nut-uploader{
            border-radius: 14rpx;
            margin-bottom: 24rpx;
            // margin-top: 20px;
            // border: 1px solid red;
            overflow: hidden;
            // width: 50%;
        }
    }
    .tips_box{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
        width: 30%;
        margin: 30px 50px;
        color: #1648d3;
    }
 }
 </style>