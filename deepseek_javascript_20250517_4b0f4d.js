document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const wordCount = document.getElementById('wordCount');
    const lineCount = document.getElementById('lineCount');
    const charCount = document.getElementById('charCount');

    // تحديث الإحصائيات
    inputText.addEventListener('input', updateStats);

    // معالجة النص
    document.getElementById('process').addEventListener('click', processText);

    // جميع أزرار الأدوات
    const tools = {
        humanize: 'قم بإنشاء مقالة بشرية حول الموضوع التالي:',
        rewrite: 'أعد صياغة النص التالي مع الحفاظ على المعنى:',
        humanText: 'حول النص التالي ليبدو وكأنه مكتوب بواسطة إنسان:',
        grammar: 'صحح الأخطاء النحوية في النص التالي:',
        plagiarism: 'قم بتحليل النص التالي للكشف عن الانتحال:',
        analyze: 'حلل النص التالي وقدم إحصائيات مفصلة:',
        translateEs: 'ترجم النص التالي إلى الإسبانية:',
        translateFr: 'ترجم النص التالي إلى الفرنسية:',
        translateAr: 'ترجم النص التالي إلى العربية:',
        summarize: 'لخص النص التالي في نقاط رئيسية:'
    };

    // إضافة معالجات الأحداث لكل أداة
    Object.keys(tools).forEach(tool => {
        if(document.getElementById(tool)) {
            document.getElementById(tool).addEventListener('click', function() {
                inputText.placeholder = tools[tool];
            });
        }
    });

    // تحميل الصورة
    document.getElementById('imageUpload').addEventListener('change', handleImageUpload);

    function updateStats() {
        const text = inputText.value;
        wordCount.textContent = text.trim() ? text.trim().split(/\s+/).length : 0;
        lineCount.textContent = text.trim() ? text.split('\n').length : 0;
        charCount.textContent = text.length;
    }

    async function processText() {
        const text = inputText.value.trim();
        if (!text) {
            alert('الرجاء إدخال نص للمعالجة');
            return;
        }

        // هنا ستقوم بالاتصال بواجهة برمجة التطبيقات للذكاء الاصطناعي
        // هذا مثال محاكاة فقط
        outputText.textContent = 'جاري معالجة النص...';
        
        try {
            // محاكاة اتصال بالخادم
            const response = await simulateAIRequest(text);
            outputText.textContent = response;
        } catch (error) {
            outputText.textContent = 'حدث خطأ أثناء معالجة النص: ' + error.message;
        }
    }

    function simulateAIRequest(text) {
        return new Promise((resolve) => {
            setTimeout(() => {
                // هذه محاكاة فقط - في التطبيق الحقيقي ستستخدم API مثل OpenAI
                resolve(`النتيجة المعالجة للنص:\n\n${text}\n\nهذه نتيجة محاكاة. في التطبيق الحقيقي، سيتم استبدال هذا برد فعل من خادم الذكاء الاصطناعي.`);
            }, 1500);
        });
    }

    function handleImageUpload(e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(event) {
            // يمكنك هنا معالجة الصورة أو استخراج النص منها باستخدام OCR
            alert('تم تحميل الصورة بنجاح. في التطبيق الحقيقي، يمكنك استخدام API لاستخراج النص من الصورة.');
        };
        reader.readAsDataURL(file);
    }
});