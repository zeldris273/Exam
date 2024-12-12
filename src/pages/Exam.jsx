import React from 'react'
import image from '../assets/ad.jpg'

const Exam = () => {
  return (
    <div className='flex bg-gray-200 gap-2'>
      <div className='w-[90%] bg-gray-50 ml-2'>
      <h2 className="text-xl font-bold flex justify-center bg-gray-200 mb-2 pt-2">New Economy TOEIC Test 10</h2>
     
        {/*Part 1*/}
        <div className='m-5'>
         
          <strong className='bg-blue-100 rounded-lg p-2 text-blue-600 mr-10 flex items-center justify-center mt-10 w-[72px]'>Part 1</strong>
          <div>
            <audio controls className="w-full my-10">
              <source src="path/to/your/audiofile.mp3" type="audio/mp3" />
              Trình duyệt của bạn không hỗ trợ thẻ audio.
            </audio>

            <img
              src={image}
              className='w-[624px] h-[440px]'
            />

            <div className='flex items-start mt-10'>
              <strong className='bg-blue-100 rounded-full p-2 text-blue-600 mr-5 flex items-center justify-center w-[35px] h-[35px]'>
                1
              </strong>

              <div className='flex flex-col'>
                <label className="flex items-center mb-2">
                  <input type='radio' name='answer' className="mr-2" /> a
                </label>
                <label className="flex items-center mb-2">
                  <input type='radio' name='answer' className="mr-2" /> b
                </label>
                <label className="flex items-center mb-2">
                  <input type='radio' name='answer' className="mr-2" /> c
                </label>
                <label className="flex items-center">
                  <input type='radio' name='answer' className="mr-2" /> d
                </label>
              </div>
            </div>
          </div>


        </div>

        {/*Part 2*/}
        <div className='m-5'>
          <strong className='bg-blue-100 rounded-lg p-2 text-blue-600 mr-10 flex items-center justify-center mt-10 w-[72px]'>Part 2</strong>
          <audio controls className="w-full my-10">
            <source src="path/to/your/audiofile.mp3" type="audio/mp3" />
            Trình duyệt của bạn không hỗ trợ thẻ audio.
          </audio>

          <div className='flex items-start mt-10'>
            <strong className='bg-blue-100 rounded-full p-2 text-blue-600 mr-5 flex items-center justify-center w-[35px] h-[35px]'>
              1
            </strong>

            <div className='flex flex-col'>
              <label className="flex items-center mb-2">
                <input type='radio' name='answer' className="mr-2" /> a
              </label>
              <label className="flex items-center mb-2">
                <input type='radio' name='answer' className="mr-2" /> b
              </label>
              <label className="flex items-center mb-2">
                <input type='radio' name='answer' className="mr-2" /> c
              </label>
            </div>
          </div>
        </div>

        {/*Part 3*/}
        <div className='m-5'>
          <strong className='bg-blue-100 rounded-lg p-2 text-blue-600 mr-10 flex items-center justify-center mt-10 w-[72px]'>Part 3</strong>
          <audio controls className="w-full my-10">
            <source src="path/to/your/audiofile.mp3" type="audio/mp3" />
            Trình duyệt của bạn không hỗ trợ thẻ audio.
          </audio>

          <div className='flex items-start mt-10'>
            <strong className='bg-blue-100 rounded-full p-2 text-blue-600 mr-5 flex items-center justify-center w-[35px] h-[35px]'>
              1
            </strong>

            <div className='flex flex-col'>
              <p>How do the speakers know each other?</p>
              <label className="flex items-center mb-2">
                <input type='radio' name='answer' className="mr-2" />A. They met through a friend.
              </label>
              <label className="flex items-center mb-2">
                <input type='radio' name='answer' className="mr-2" />B. They take a class together.
              </label>
              <label className="flex items-center mb-2">
                <input type='radio' name='answer' className="mr-2" />C. They live in the same apartment complex.
              </label>
              <label className="flex items-center">
                <input type='radio' name='answer' className="mr-2" />D. They work at the same company.
              </label>
            </div>
          </div>

          <div className='flex items-start mt-5'>
            <strong className='bg-blue-100 rounded-full p-2 text-blue-600 mr-5 flex items-center justify-center w-[35px] h-[35px]'>
              1
            </strong>

            <div className='flex flex-col'>
              <p>How do the speakers know each other?</p>
              <label className="flex items-center mb-2">
                <input type='radio' name='answer' className="mr-2" />A. They met through a friend.
              </label>
              <label className="flex items-center mb-2">
                <input type='radio' name='answer' className="mr-2" />B. They take a class together.
              </label>
              <label className="flex items-center mb-2">
                <input type='radio' name='answer' className="mr-2" />C. They live in the same apartment complex.
              </label>
              <label className="flex items-center">
                <input type='radio' name='answer' className="mr-2" />D. They work at the same company.
              </label>
            </div>
          </div>

          <div className='flex items-start mt-5'>
            <strong className='bg-blue-100 rounded-full p-2 text-blue-600 mr-5 flex items-center justify-center w-[35px] h-[35px]'>
              1
            </strong>

            <div className='flex flex-col'>
              <p>How do the speakers know each other?</p>
              <label className="flex items-center mb-2">
                <input type='radio' name='answer' className="mr-2" />A. They met through a friend.
              </label>
              <label className="flex items-center mb-2">
                <input type='radio' name='answer' className="mr-2" />B. They take a class together.
              </label>
              <label className="flex items-center mb-2">
                <input type='radio' name='answer' className="mr-2" />C. They live in the same apartment complex.
              </label>
              <label className="flex items-center">
                <input type='radio' name='answer' className="mr-2" />D. They work at the same company.
              </label>
            </div>
          </div>

          <div className='grid grid-cols-12 gap-2 mt-5'>
            <div className='col-span-7 rounded-md bg-gray-200'>
              <div className='-mt-5 ml-5'>
                <audio controls className="w-[90%] my-10">
                  <source src="path/to/your/audiofile.mp3" type="audio/mp3" />
                  Trình duyệt của bạn không hỗ trợ thẻ audio.
                </audio>
                <img
                  src={image}
                  className='w-[624px] h-[440px]'
                />
              </div>

            </div>

            <div className="col-span-5">
              <div className='flex items-start mt-7'>
                <strong className='bg-blue-100 rounded-full p-2 text-blue-600 mr-5 flex items-center justify-center w-[35px] h-[35px]'>
                  1
                </strong>

                <div className='flex flex-col'>
                  <p>How do the speakers know each other?</p>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />A. They met through a friend.
                  </label>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />B. They take a class together.
                  </label>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />C. They live in the same apartment complex.
                  </label>
                  <label className="flex items-center">
                    <input type='radio' name='answer' className="mr-2" />D. They work at the same company.
                  </label>
                </div>
              </div>

              <div className='flex items-start mt-10'>
                <strong className='bg-blue-100 rounded-full p-2 text-blue-600 mr-5 flex items-center justify-center w-[35px] h-[35px]'>
                  1
                </strong>

                <div className='flex flex-col'>
                  <p>How do the speakers know each other?</p>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />A. They met through a friend.
                  </label>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />B. They take a class together.
                  </label>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />C. They live in the same apartment complex.
                  </label>
                  <label className="flex items-center">
                    <input type='radio' name='answer' className="mr-2" />D. They work at the same company.
                  </label>
                </div>
              </div>

              <div className='flex items-start mt-10'>
                <strong className='bg-blue-100 rounded-full p-2 text-blue-600 mr-5 flex items-center justify-center w-[35px] h-[35px]'>
                  1
                </strong>

                <div className='flex flex-col'>
                  <p>How do the speakers know each other?</p>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />A. They met through a friend.
                  </label>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />B. They take a class together.
                  </label>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />C. They live in the same apartment complex.
                  </label>
                  <label className="flex items-center">
                    <input type='radio' name='answer' className="mr-2" />D. They work at the same company.
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Part 4 */}
        <div className='m-5'>
          <strong className='bg-blue-100 rounded-lg p-2 text-blue-600 mr-10 flex items-center justify-center mt-10 w-[72px]'>Part 4</strong>
          <audio controls className="w-full my-10">
            <source src="path/to/your/audiofile.mp3" type="audio/mp3" />
            Trình duyệt của bạn không hỗ trợ thẻ audio.
          </audio>

          <div className='flex items-start mt-10'>
            <strong className='bg-blue-100 rounded-full p-2 text-blue-600 mr-5 flex items-center justify-center w-[35px] h-[35px]'>
              1
            </strong>

            <div className='flex flex-col'>
              <p>How do the speakers know each other?</p>
              <label className="flex items-center mb-2">
                <input type='radio' name='answer' className="mr-2" />A. They met through a friend.
              </label>
              <label className="flex items-center mb-2">
                <input type='radio' name='answer' className="mr-2" />B. They take a class together.
              </label>
              <label className="flex items-center mb-2">
                <input type='radio' name='answer' className="mr-2" />C. They live in the same apartment complex.
              </label>
              <label className="flex items-center">
                <input type='radio' name='answer' className="mr-2" />D. They work at the same company.
              </label>
            </div>
          </div>

          <div className='flex items-start mt-5'>
            <strong className='bg-blue-100 rounded-full p-2 text-blue-600 mr-5 flex items-center justify-center w-[35px] h-[35px]'>
              1
            </strong>

            <div className='flex flex-col'>
              <p>How do the speakers know each other?</p>
              <label className="flex items-center mb-2">
                <input type='radio' name='answer' className="mr-2" />A. They met through a friend.
              </label>
              <label className="flex items-center mb-2">
                <input type='radio' name='answer' className="mr-2" />B. They take a class together.
              </label>
              <label className="flex items-center mb-2">
                <input type='radio' name='answer' className="mr-2" />C. They live in the same apartment complex.
              </label>
              <label className="flex items-center">
                <input type='radio' name='answer' className="mr-2" />D. They work at the same company.
              </label>
            </div>
          </div>

          <div className='flex items-start mt-5'>
            <strong className='bg-blue-100 rounded-full p-2 text-blue-600 mr-5 flex items-center justify-center w-[35px] h-[35px]'>
              1
            </strong>

            <div className='flex flex-col'>
              <p>How do the speakers know each other?</p>
              <label className="flex items-center mb-2">
                <input type='radio' name='answer' className="mr-2" />A. They met through a friend.
              </label>
              <label className="flex items-center mb-2">
                <input type='radio' name='answer' className="mr-2" />B. They take a class together.
              </label>
              <label className="flex items-center mb-2">
                <input type='radio' name='answer' className="mr-2" />C. They live in the same apartment complex.
              </label>
              <label className="flex items-center">
                <input type='radio' name='answer' className="mr-2" />D. They work at the same company.
              </label>
            </div>
          </div>

          <div className='grid grid-cols-12 gap-2 mt-5'>
            <div className='col-span-7 rounded-md bg-gray-200'>
              <div className='-mt-5 ml-5'>
                <audio controls className="w-[90%] my-10">
                  <source src="path/to/your/audiofile.mp3" type="audio/mp3" />
                  Trình duyệt của bạn không hỗ trợ thẻ audio.
                </audio>
                <img
                  src={image}
                  className='w-[624px] h-[440px]'
                />
              </div>

            </div>

            <div className="col-span-5">
              <div className='flex items-start mt-7'>
                <strong className='bg-blue-100 rounded-full p-2 text-blue-600 mr-5 flex items-center justify-center w-[35px] h-[35px]'>
                  1
                </strong>

                <div className='flex flex-col'>
                  <p>How do the speakers know each other?</p>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />A. They met through a friend.
                  </label>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />B. They take a class together.
                  </label>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />C. They live in the same apartment complex.
                  </label>
                  <label className="flex items-center">
                    <input type='radio' name='answer' className="mr-2" />D. They work at the same company.
                  </label>
                </div>
              </div>

              <div className='flex items-start mt-10'>
                <strong className='bg-blue-100 rounded-full p-2 text-blue-600 mr-5 flex items-center justify-center w-[35px] h-[35px]'>
                  1
                </strong>

                <div className='flex flex-col'>
                  <p>How do the speakers know each other?</p>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />A. They met through a friend.
                  </label>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />B. They take a class together.
                  </label>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />C. They live in the same apartment complex.
                  </label>
                  <label className="flex items-center">
                    <input type='radio' name='answer' className="mr-2" />D. They work at the same company.
                  </label>
                </div>
              </div>

              <div className='flex items-start mt-10'>
                <strong className='bg-blue-100 rounded-full p-2 text-blue-600 mr-5 flex items-center justify-center w-[35px] h-[35px]'>
                  1
                </strong>

                <div className='flex flex-col'>
                  <p>How do the speakers know each other?</p>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />A. They met through a friend.
                  </label>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />B. They take a class together.
                  </label>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />C. They live in the same apartment complex.
                  </label>
                  <label className="flex items-center">
                    <input type='radio' name='answer' className="mr-2" />D. They work at the same company.
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Part 5 */}
        <div className='m-5'>
          <strong className='bg-blue-100 rounded-lg p-2 text-blue-600 mr-10 flex items-center justify-center mt-10 w-[72px]'>Part 5</strong>
          <div className='flex items-start mt-5'>
            <strong className='bg-blue-100 rounded-full p-2 text-blue-600 mr-5 flex items-center justify-center w-[35px] h-[35px]'>
              1
            </strong>

            <div className='flex flex-col'>
              <p>How do the speakers know each other?</p>
              <label className="flex items-center mb-2">
                <input type='radio' name='answer' className="mr-2" />A. They met through a friend.
              </label>
              <label className="flex items-center mb-2">
                <input type='radio' name='answer' className="mr-2" />B. They take a class together.
              </label>
              <label className="flex items-center mb-2">
                <input type='radio' name='answer' className="mr-2" />C. They live in the same apartment complex.
              </label>
              <label className="flex items-center">
                <input type='radio' name='answer' className="mr-2" />D. They work at the same company.
              </label>
            </div>
          </div>
        </div>

        {/*Part 6 */}
        <div className='m-5'>
          <strong className='bg-blue-100 rounded-lg p-2 text-blue-600 mr-10 flex items-center justify-center mt-10 w-[72px]'>Part 6</strong>
          <div className='grid grid-cols-12 gap-2 mt-5'>
            <div className='col-span-7 rounded-md bg-gray-200'>
              <div className='-mt-5 ml-5'>
                <audio controls className="w-[90%] my-10">
                  <source src="path/to/your/audiofile.mp3" type="audio/mp3" />
                  Trình duyệt của bạn không hỗ trợ thẻ audio.
                </audio>
                <img
                  src={image}
                  className='w-[624px] h-[440px]'
                />
              </div>

            </div>

            <div className="col-span-5">
              <div className='flex items-start mt-7'>
                <strong className='bg-blue-100 rounded-full p-2 text-blue-600 mr-5 flex items-center justify-center w-[35px] h-[35px]'>
                  1
                </strong>

                <div className='flex flex-col'>
                  <p>How do the speakers know each other?</p>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />A. They met through a friend.
                  </label>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />B. They take a class together.
                  </label>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />C. They live in the same apartment complex.
                  </label>
                  <label className="flex items-center">
                    <input type='radio' name='answer' className="mr-2" />D. They work at the same company.
                  </label>
                </div>
              </div>

              <div className='flex items-start mt-10'>
                <strong className='bg-blue-100 rounded-full p-2 text-blue-600 mr-5 flex items-center justify-center w-[35px] h-[35px]'>
                  1
                </strong>

                <div className='flex flex-col'>
                  <p>How do the speakers know each other?</p>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />A. They met through a friend.
                  </label>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />B. They take a class together.
                  </label>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />C. They live in the same apartment complex.
                  </label>
                  <label className="flex items-center">
                    <input type='radio' name='answer' className="mr-2" />D. They work at the same company.
                  </label>
                </div>
              </div>

              <div className='flex items-start mt-10'>
                <strong className='bg-blue-100 rounded-full p-2 text-blue-600 mr-5 flex items-center justify-center w-[35px] h-[35px]'>
                  1
                </strong>

                <div className='flex flex-col'>
                  <p>How do the speakers know each other?</p>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />A. They met through a friend.
                  </label>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />B. They take a class together.
                  </label>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />C. They live in the same apartment complex.
                  </label>
                  <label className="flex items-center">
                    <input type='radio' name='answer' className="mr-2" />D. They work at the same company.
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Part 7 */}
        <div className='m-5'>
          <strong className='bg-blue-100 rounded-lg p-2 text-blue-600 mr-10 flex items-center justify-center mt-10 w-[72px]'>Part 7</strong>
          <div className='grid grid-cols-12 gap-2 mt-5 w-[]'>
            <div className='col-span-7 rounded-md bg-gray-200'>
              <img
                src={image}
                className='w-[624px] h-[440px] m-5'
              />
            </div>

            <div className="col-span-5">
              <div className='flex items-start mt-5'>
                <strong className='bg-blue-100 rounded-full p-2 text-blue-600 mr-5 flex items-center justify-center w-[35px] h-[35px]'>
                  1
                </strong>

                <div className='flex flex-col'>
                  <p>How do the speakers know each other?</p>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />A. They met through a friend.
                  </label>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />B. They take a class together.
                  </label>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />C. They live in the same apartment complex.
                  </label>
                  <label className="flex items-center">
                    <input type='radio' name='answer' className="mr-2" />D. They work at the same company.
                  </label>
                </div>
              </div>

              <div className='flex items-start mt-10'>
                <strong className='bg-blue-100 rounded-full p-2 text-blue-600 mr-5 flex items-center justify-center w-[35px] h-[35px]'>
                  1
                </strong>

                <div className='flex flex-col'>
                  <p>How do the speakers know each other?</p>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />A. They met through a friend.
                  </label>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />B. They take a class together.
                  </label>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />C. They live in the same apartment complex.
                  </label>
                  <label className="flex items-center">
                    <input type='radio' name='answer' className="mr-2" />D. They work at the same company.
                  </label>
                </div>
              </div>

              <div className='flex items-start mt-10'>
                <strong className='bg-blue-100 rounded-full p-2 text-blue-600 mr-5 flex items-center justify-center w-[35px] h-[35px]'>
                  1
                </strong>

                <div className='flex flex-col'>
                  <p>How do the speakers know each other?</p>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />A. They met through a friend.
                  </label>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />B. They take a class together.
                  </label>
                  <label className="flex items-center mb-2">
                    <input type='radio' name='answer' className="mr-2" />C. They live in the same apartment complex.
                  </label>
                  <label className="flex items-center">
                    <input type='radio' name='answer' className="mr-2" />D. They work at the same company.
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white fixed top-15 right-0 py-2 translate-y-9 min-w-[127px] text-sm' >
        <div className='flex flex-col mt-2 items-center'>
        <span>Thời gian làm bài</span>
        <strong>12:20</strong>
        <button className='mt-3 px-4 py-2 border-2 border-blue-200 rounded hover:bg-blue-500 text-blue-600 hover:text-white'>Nộp bài</button>
        <button className='mt-3 px-4 py-2 border-2 bg-orange-400 rounded hover:bg-orange-500 font-bold text-white'>Thoát</button>
        </div>
      </div>
    </div>
  )
}

export default Exam
