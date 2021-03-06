import CircularProgress from '@material-ui/core/CircularProgress'
import Box from '@material-ui/core/Box'
import styled from 'styled-components'
import AVIcon from './AVIcon'

const TestProgress = styled.div`
  height: 40px;
  width: 30px;
  margin-left: 10px;
  margin-right: 2px;
  display: flex;
  align-items: center;
  padding-bottom: 1px;
  .avds-device-test-progress-circle {
    transition: color 200ms ease-in-out;
  }
  .avds-device-test-progress-circle.inactive {
    color: rgba(231, 233, 236, 0.75);
    position: absolute;
  }
`

const AudioInputTestProgress = ({ testState = 'recording', progress }) => {

  return (
    <TestProgress className="avds-device-test-progress">
      <CircularProgress
        size={32}
        thickness={5}
        value={100}
        variant="determinate"
        classes={{ root: 'avds-device-test-progress-circle inactive' }}
      />
      {!!testState && (
        <Box position="relative" display="inline-flex">
          <CircularProgress
            size={32}
            thickness={5}
            value={progress || 0}
            variant="determinate"
            classes={{ root: `avds-device-test-progress-circle progress-${testState}` }}
          />
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {testState === 'recording' ? (
              <AVIcon iconName="record" className={`progress-${testState}`} />
            ) : (
              <AVIcon iconName="play" className={`progress-${testState}`} />
            )}
          </Box>
        </Box>
      )}
    </TestProgress>
  )
}

export default AudioInputTestProgress
