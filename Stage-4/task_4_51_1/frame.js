(function (window) {

    // �����ǵ������⣬����ʹ���ϸ�ģʽ�������ܷ���Ǳ������
    'use strict';



    function IfeAlbum() {

        // ���ֵ�ö������
        this.LAYOUT = {
            PUZZLE: 1,    // ƴͼ����
            WATERFALL: 2, // �ٲ�����
            BARREL: 3     // ľͰ����
        };

        // ���б�������д������
        // this.xxx = ...

    }

    // ˽�б�������д������
    // var xxx = ...



    /************* �����Ǳ����ṩ�Ĺ��з��� *************/



    /**
     * ��ʼ�����������
     * �����ԭ������ͼƬʱ���÷������滻ԭ��ͼƬ
     * @param {(string|string[])} image  һ��ͼƬ�� URL �����ͼƬ URL ��ɵ�����
     * @param {object}            option ������
     */
    IfeAlbum.prototype.setImage = function (image, option) {

        if (typeof image === 'string') {
            // ��װ�����鴦��
            this.setImage([image]);
            return;
        }

        // ���ʵ��

    };



    /**
     * ��ȡ�������ͼ���Ӧ�� DOM Ԫ��
     * ���Բ��� �����Ǹ�����Ԫ��
     * @return {HTMLElement[]} �������ͼ���Ӧ�� DOM Ԫ����ɵ�����
     */
    IfeAlbum.prototype.getImageDomElements = function () {

    };



    /**
     * ��������ͼƬ
     * ��ƴͼ�����£�����ͼƬ�������¼��㲼�ַ�ʽ��������������β��׷��ͼƬ
     * @param {(string|string[])} image һ��ͼƬ�� URL �����ͼƬ URL ��ɵ�����
     */
    IfeAlbum.prototype.addImage = function (image) {

    };



    /**
     * �Ƴ�����е�ͼƬ
     * @param  {(HTMLElement|HTMLElement[])} image ��Ҫ�Ƴ���ͼƬ
     * @return {boolean} �Ƿ�ȫ���Ƴ��ɹ�
     */
    IfeAlbum.prototype.removeImage = function (image) {

    };



    /**
     * �������Ĳ���
     * @param {number} layout ����ֵ��IfeAlbum.LAYOUT �е�ֵ
     */
    IfeAlbum.prototype.setLayout = function (layout) {

    };



    /**
     * ��ȡ���Ĳ���
     * @return {number} ����ö�����͵�ֵ
     */
    IfeAlbum.prototype.getLayout = function () {

    };



    /**
     * ����ͼƬ֮��ļ��
     * ע�����ֵ������ͼƬ��ļ�࣬��Ӧֱ������ͼƬ�� margin ���ԣ������Ͻ�ͼ����ߺ��ϱ�Ӧ�ý���������ߺ��ϱ�
     * ��᱾��� padding ʼ���� 0���û����޸�������Ŀհ���Ҫ�Լ��������Ԫ�ص� padding
     * @param {number}  x  ͼƬ֮��ĺ�����
     * @param {number} [y] ͼƬ֮��������࣬����� undefined ���ͬ�� x
     */
    IfeAlbum.prototype.setGutter = function (x, y) {

    };



    /**
     * ������ͼƬʱȫ�����ͼƬ
     */
    IfeAlbum.prototype.enableFullscreen = function () {

    };



    /**
     * ��ֹ���ͼƬʱȫ�����ͼƬ
     */
    IfeAlbum.prototype.disableFullscreen = function () {

    };



    /**
     * ��ȡ���ͼƬʱȫ�����ͼƬ�Ƿ�����
     * @return {boolean} �Ƿ�����ȫ�����
     */
    IfeAlbum.prototype.isFullscreenEnabled = function () {

    };


    /**
     * ����ľͰģʽÿ��ͼƬ����������
     * @param {number} min ����ͼƬ��������
     * @param {number} max ���ͼƬ��������
     */
    IfeAlbum.prototype.setBarrelBin = function (min, max) {

        // ע���쳣����Ĵ�����һ����׳�Ŀ�
        if (min === undefined || max === undefined || min > max) {
            console.error('...');
            return;
        }

        // ���ʵ��

    };



    /**
     * ��ȡľͰģʽÿ��ͼƬ��������
     * @return {number} ���ͼƬ��������
     */
    IfeAlbum.prototype.getBarrelBinMax = function () {

    };



    /**
     * ��ȡľͰģʽÿ��ͼƬ��������
     * @return {number} ����ͼƬ��������
     */
    IfeAlbum.prototype.getBarrelBinMin = function () {

    };



    /**
     * ����ľͰģʽÿ�и߶ȵ������ޣ���λ����
     * @param {number} min ��С�߶�
     * @param {number} max ���߶�
     */
    IfeAlbum.prototype.setBarrelHeight = function (min, max) {

    };



    /**
     * ��ȡľͰģʽÿ�и߶ȵ�����
     * @return {number} ���ͼƬ��������
     */
    IfeAlbum.prototype.getBarrelHeightMax = function () {

    };



    /**
     * ��ȡľͰģʽÿ�и߶ȵ�����
     * @return {number} ����ͼƬ��������
     */
    IfeAlbum.prototype.getBarrelHeightMin = function () {

    };



    // �������ӵ������ӿ�



    /************* �����Ǳ����ṩ�Ĺ��з��� *************/



    // ʵ����
    if (typeof window.ifeAlbum === 'undefined') {
        // ֻ�е�δ��ʼ��ʱ��ʵ����
        window.ifeAlbum = new IfeAlbum();
    }

}(window));